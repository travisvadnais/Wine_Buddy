import React from 'react';

import { auth } from '../../firebase/firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    className="btn btn-danger my-2 my-sm-0"
  >
    Sign Out
  </button>

export default SignOutButton;