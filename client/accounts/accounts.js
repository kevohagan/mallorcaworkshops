
Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
  return AccountsEntry.config({
    logo:'logo_workshops.png',
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    termsUrl:'/terms-of-use',
    privacyUrl:'/privacy-policy',
    profileRoute:'/dashboard',
    showSignupCode: false
  });
});


