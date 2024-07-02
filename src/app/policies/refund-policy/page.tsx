import FaqCommon from '@/components/faq-common'
import FaqCompatibility from '@/components/faq-compatibility'
import FaqShipping from '@/components/faq-shipping'
import Footer from '@/components/footer'
import TopHeader from '@/components/top-header'
import Link from 'next/link'
import React from 'react'

type Props = {}

const RefundPolicyPage = (props: Props) => {
  return (
    <main className='flex flex-col min-h-screen relative bg-[#F4F4F6]'>
      <div className="fixed top-0 left-0 right-0 z-10">
        <TopHeader />
      </div>
      <section className="mt-24 z-0 m-4 h-[50%] bg-white rounded-2xl p-4 space-y-4">
        <h1 className='text-3xl font-bold text-center'>Refund Policy</h1>
        <p className='font-bold text-center'>Refund Policy</p>
        <p className='font-bold'>To start your return, head over to our <Link className="font-bold underline" href="/">Return Contact Form</Link></p>
        <p>Then, please provide your order number where asked and let us know the reason for your return in the message. </p>
        <p className='font-bold'>What is your return policy?</p>
        <ul className='pl-5 list-disc'>
          <li>We accept items in brand new, unopened condition. All items must be packed in the original corresponding packaging for a full refund. We reserve the right to reject your return claim if the item doesn&apos;t adhere to any of these conditions.</li>
          <li className='font-bold'>No return on final sale items. No exceptions.</li>
          <li>You have 30 calendar days from the day you receive your shipment to start your return. Once a return is requested, all return items must be shipped back to us within 7 days. Your refund will be credited to the same payment method used to make the purchase.</li>
          <li>Please note: All customers are responsible for paying for shipping costs associated with returns.</li>
          <li>Your order will be subject to a $5 repacking fee if the product has been opened. You will be refunded the difference.</li>
        </ul>
        <p>dot.cards Inc. reserves the right to refuse a return for any reason at our discretion. This includes, but is not limited to, items that do not comply with our return policy (open, damaged, packaging missing, outside the 30-day period, etc.)</p>
        <p className='font-bold'>How do I start a return?</p>
        <p>Head over to our Return Contact Form to start your return.</p>
        <p>Our customer support team will then assist you and once your return is authorized, you will receive a prepaid shipping label via email.</p>
        <p>Returns that are not done through our customer support will not be accepted.</p>
        <p className='font-bold'>Do I have to pay for my return?</p>
        <p>Once your return is verified, you will be entitled to receive a refund.</p>
        <p>All customers are responsible for paying for shipping costs associated with returns.</p>
        <p>You will be refunded the difference.</p>
        <p className='font-bold'>What should I do if I receive an incorrect or damaged item?</p>
        <p>Please contact us <Link className="font-bold underline" href="/">here</Link> for any issues with an order. Someone from our customer care team will respond with a solution shortly. In your form, please include your name, order number, and a short description of the problem.</p>
        <p className='font-bold'>How long does it take to process my return?</p>
        <p>Please allow 5 business days for your returns to be processed once received at our facility. Once they are processed, you will receive an email notification regarding your refund.</p>
        <p className='font-bold'>Which items are final sale?</p>
        <p>All custom items are final sale and not eligible for returns. No exceptions.</p>
        <p>Shipping is a final sale item. It is a fixed cost and not eligible for refund. </p>
        <p className='font-bold'>Can I get a refund if my custom order takes too long?</p>
        <p>No, there are no guarantees on the production time for custom orders. The production of your custom order starts after we receive your approval of the mockup. Designs are confirmed automatically if no reply is received within 7 days. Production time will not exceed 3 months.</p>
        <p>The production time for custom devices is not exact as some designs/quantities might take longer than others. A delay in production time will not justify a refund.</p>
        <p className='font-bold'>Do you accept order exchanges?</p>
        <p>No, if you are looking to exchange your dot for a different type/color and your order has already been fulfilled, wait until your order is delivered, then return it to us.</p>
        <p>The fastest way to exchange your dot is to return the item you have and make a separate purchase for the new item. Once the return is accepted and processed, you will receive a refund for the initial order.</p>
        <p>Please make sure not to activate or open the dot packaging you are returning.</p>
        <p className='font-bold'>Do you honor price adjustments?</p>
        <p>If an item goes on sale within 3 days of your purchase, we will honor the sale price upon request. Please contact us <Link className="font-bold underline" href="/">here</Link> for any price adjustments inquiries. We will refund the difference to the original form of payment as long as the request is received within 5 days of the date of purchase. Please allow 3-5 business days for the refund to appear on your bank statement.  Please note that refund times are dictated by the card issuers and are outside our control.</p>
      </section>
      <Footer />
    </main>
  )
}

export default RefundPolicyPage