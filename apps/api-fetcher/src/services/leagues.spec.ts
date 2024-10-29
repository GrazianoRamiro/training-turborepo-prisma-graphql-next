import { leaguesService } from '../services/leagues.service';
import { footballService } from '../services/api-football.service';

describe('LeaguesService', () => {
  describe('Integration Tests', () => {
    it('should fetch leagues successfully from the real API', async () => {
      if (!process.env.API_FOOTBALL_BASE_URL) {
        console.log('Skipping test: API_FOOTBALL_BASE_URL not set');
        return;
      }

      const leagues = await leaguesService.fetchLeagues();
      expect(leagues).toBeDefined();
      expect(Array.isArray(leagues)).toBe(true);
    });

    it('should handle errors when the API is unreachable', async () => {
      // Temporarily change the baseURL to simulate an unreachable API
      footballService['axiosInstance'].defaults.baseURL =
        'https://invalid-url.com';

      await expect(leaguesService.fetchLeagues()).rejects.toThrow();

      // Restore the correct baseURL
      footballService['axiosInstance'].defaults.baseURL =
        process.env.API_FOOTBALL_BASE_URL;
    });
  });
});
