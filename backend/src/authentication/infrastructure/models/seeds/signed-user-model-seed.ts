import {SignedUserModel} from '#/authentication/infrastructure/models/signed-user-model';

export const signedUserSeed = async () => {
  SignedUserModel.deleteMany({}, () => {});
  SignedUserModel.insertMany([
    {
      email: 'nelson@mosano.eu',
      password: 'benfica',
    },
    {
      email: 'carlos@mosano.eu',
      password: 'botafogo',
    },
    {
      email: 'francisco@mosano.eu',
      password: 'portofc',
    },
  ]);
};
