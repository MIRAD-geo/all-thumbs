import * as React from "react";
import { Link } from "react-router-dom";

function FakeConfirmation() {


    return (
      <div>
          <h1>Order Confirmation # 357035783261370913</h1>
          <Link to="/" class="flex font-semibold text-emerald-500 text-sm mt-10">
          <svg class="fill-current mr-2 text-emerald-500 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
       Back to Home</Link>
        </div>
    );
  }

export default FakeConfirmation;