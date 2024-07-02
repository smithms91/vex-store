import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import React from 'react'

type Props = {}

const FaqCompatibility = (props: Props) => {
  return (
    <div>
      <h1 className='text-3xl font-bold mt-10'>Shipping</h1>
      <Accordion className="overflow-hidden" type="single" collapsible>
        <AccordionItem value="item-12">
          <AccordionTrigger className='text-left'>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            Your order will be shipped from our warehouse and delivered within 2 to 8 business days, depending on the destination and shipping method chosen.<br /><br />
            Please keep in mind that shipping times may vary depending on the shipping option you select at checkout.<br /><br />
            Each shipping option will display the estimated number of business days that the carrier expects delivery to take and does not include fulfillment time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className='text-left'>What shipping methods do you offer?</AccordionTrigger>
          <AccordionContent>
            We offer several shipping options for our customers, including:
            <ul className='pl-5 list-disc'>
              <li>USPS First Class Mail</li>
              <li>UPS Ground</li>
              <li>UPS 2nd Day Air</li>
            </ul>
            Shipping estimates and costs are calculated by the carrier based on the shipping address entered.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger className='text-left'>Is free shipping available?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer free shipping on all orders over $50. We utilize USPS First Class Mail for orders with free shipping.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger className='text-left'>What is the fulfillment time?</AccordionTrigger>
          <AccordionContent>
            Orders placed before 11AM PST using USPS First Class Mail will be shipped on the same day.<br /><br />
            Orders placed before 3PM PST using UPS Ground or UPS 2nd Day Air will be shipped on the same day.<br /><br />
            If you place an order after those hours, your order will be shipped on the next business day.<br /><br />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-16">
          <AccordionTrigger className='text-left'>Where is your fulfillment center located?</AccordionTrigger>
          <AccordionContent>
            Our fulfillment center is based out of vibrant Inglewood, California!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-17">
          <AccordionTrigger className='text-left'>Do you offer same-day or overnight delivery?</AccordionTrigger>
          <AccordionContent>
            We do not offer same-day or overnight delivery. The fastest shipping option we provide is UPS 2nd Day Air, which promises delivery within 2 business days once the order is shipped from our warehouse. Depending on your address in relation to our warehouse, UPS Ground may estimate 1-2 business days. However, that is an estimate provided by UPS and not a guarantee.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className='text-left'>Can I track my shipment?</AccordionTrigger>
          <AccordionContent>
            Yes, once your order is shipped, you will receive a confirmation email containing a tracking number. You can use this tracking number to monitor the progress of your shipment on the carrier&apos;s website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className='text-left'>Can I get a refund for shipping costs?</AccordionTrigger>
          <AccordionContent>
            Shipping costs are determined by and paid to the couriers. All shipping costs are final sale and cannot be refunded under any circumstances.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className='text-left'>I haven&apos;t received my order</AccordionTrigger>
          <AccordionContent>
            Haven&apos;t received your order? No sweat!<br /><br />
            If more than 10 business days have passed since your order shipped and you&apos;ve yet to receive it, please reach out to customer support and we will make it right by you!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className='text-left'>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Absolutely, we ship worldwide!<br /><br />
            Please be aware that while we take every care to ensure your order reaches you smoothly, we are not liable for any delivery issues. Any delivery concerns will need to be resolved directly with the courier.<br /><br />
            To make things easier for you, we collect duties and import taxes at checkout, giving you an estimate of what your specific country may charge for international shipments. However, please note that there may be additional charges imposed by customs in your country. We&apos;re committed to transparency and convenience, but final customs fees are beyond our control.<br /><br />
            Enjoy seamless global shopping with us!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-18">
          <AccordionTrigger className='text-left'>Returns</AccordionTrigger>
          <AccordionContent>
            test
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FaqCompatibility