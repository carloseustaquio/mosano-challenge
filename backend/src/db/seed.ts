import {signedUserSeed} from '#/authentication/infrastructure/models/seeds/signed-user-model-seed';
import {countriesSeed} from '#/country/infrastructure/models/seeds/country-model-seed';

const seeds = [
  countriesSeed,
  signedUserSeed,
];

export const seed = async () => {
  console.log('🌰 Seeding values...');
  await Promise.all(seeds.map(async (func) => {
    console.log(`seeding: ${func.name}`);
    func();
  }));
  console.log('🌱 Seeding finished!');
};
