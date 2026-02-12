import React from 'react';

const Address = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="hero">
        <div className="flex flex-col items-center px-5 py-5 md:px-20 md:py-10 font-gilroy">
          <h2 className="title mb-10 ">Office Address</h2>
          <div className="flex flex-col text-left md:flex-row gap-5 w-full">
            {/* Left Section */}
            <div className="md:w-2/5 space-y-6">
              <div className="pr-20">
                <h4 className="font-bold mb-5">Unoten Eventii Tech Pvt Limited</h4>
                <p className="opacity-[80%]">
                  Office Address: #C808, Smr Vinay Galaxy, Hoodi Junction, Mahadevpura, Bengaluru - 560048, Karnataka, India
                </p>
              </div>

              <div className="pr-10">
                <h4 className="font-bold mb-5 ">Sales Enquiry</h4>
                <p className="opacity-[80%]">
                  Ms. Stuti Yadav<br />
                  <a href="mailto:stuti@expoplato.com" className="text-blue-600 underline">stuti@expoplato.com</a> | +91 9179109484
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-3/5 pr-5">
              <h4 className="font-bold mb-5">Ticket Refund Policy</h4>
              <p className="text-justify font-medium opacity-[80%]">
                Delegate Fee/Exhibitor charges paid through payment gateway for ExpoPlato Events are subject to the following refund policy.</p> 
                <p className="mt-5 font-medium opacity-[80%]">
                In case the event is cancelled by the organiser, the amount paid by the individual/company is fully refundable. 
                There will be no deduction in this case. Refund will be made through account payee cheque to the payer within 30 days of official cancellation of the event.
                Amount paid through payment gateway is non-refundable in case of no-show or non-participation by the individual/company.
                To claim the refund, ticket confirmation email and your Bank account details need to be sent to 
                <a href="mailto:stuti@expoplato.com" className="text-blue-600 underline">stuti@expoplato.com</a>.
                For any clarification related to payment, please send email to 
                <a href="mailto:stuti@expoplato.com" className="text-blue-600 underline">stuti@expoplato.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
       <h6 className="mt-10 text-gray-500 border-t-2 border-gray-500 text-center py-5 ">Powered By &nbsp;
        <a href="/" className="underline text-blue-600 hover:text-blue-800">ExpoPlato</a></h6>
    </div>
  );
};

export default Address;
