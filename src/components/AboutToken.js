import { useMediaQuery } from "react-responsive";

const faqs = [
  {
    id: 1,
    title: '— What is oui’dily?',
    text: 'Oui’dily (pronounced “weed-ily”) is a monthly cannabis subscription box that is curated with a personalized touch and provides major savings on premium products. Each month our members can customize their preferences and can try novel cannabis products delivered right to their doorstep.'
  },
  {
    id: 2,
    title: '— What customizations can I make?',
    text: 'Members have the option to customize which type of products (i.e., flower, preroll, vape, edible) and strains (i.e., hybrid, indica, sativa) they want in the box. You must choose at least 2 selections for products and strains.'
  },
  {
    id: 3,
    title: '— When can I customize?',
    text: 'The first box received can be customized upon sign up. If you would like to make changes before your next shipment, you have until the 15th of the month to make changes before we start to curate next month’s box. If you miss out, don’t worry! Reach out to our team and we’ll try to accommodate.'
  },
  {
    id: 4,
    title: '— How much is the monthly subscription?',
    text: 'All new customers get to try our box for just $99. After receiving the first box, future boxes will cost $149 plus tax. Boxes have a value of over $200+ worth of product. We offer plans that provide even greater savings of up to 30% in addition to the discounts on the retail prices of products.'
  },
  {
    id: 5,
    title: '— When are my boxes delivered?',
    text: 'Boxes are delivered by our team of couriers to your delivery address on the delivery date selected after checkout. You will be notified by text to track the status of your delivery on the same day. Our couriers will be in touch with you as they approach your address. Currently, delivery dates are only available during the first 2 weeks of every month.'
  },
  {
    id: 6,
    title: '— How is my box delivered?',
    text: 'We respect your privacy and keep our exterior packaging to be discrete as possible.'
  },
  {
    id: 7,
    title: '— Do I need to be home when my box arrives?',
    text: 'No, you do not need to be home when the box is delivered by our courier. You will receive tracking information 1-2 days before the scheduled delivery date. Our courier will attempt to hand-off to you directly if you’re home. Otherwise, they will leave it at the door.'
  },
  {
    id: 8,
    title: '— What if my box is missing?',
    text: 'In the event that you don’t receive your box, contact us.'
  },
  {
    id: 9,
    title: '— How can I contact you?',
    text: 'The best way to reach is by emailing support@ouidily.com, or you can live chat with our support team by clicking the chat bubble in the bottom right corner of your screen between 11am-7pm daily.'
  },
  {
    id: 10,
    title: '— How do I cancel or skip a delivery?',
    text: 'You can cancel or pause your subscription anytime by logging into your account.'
  },
  {
    id: 11,
    title: '— What payment methods are accepted?',
    text: 'We accept all major credit cards.'
  },
  {
    id: 12,
    title: '— Do you offer add-ons?',
    text: 'Currently, we do not offer add-ons to the box. We are hoping to grow our network of New York-based brands to fill our boxes with premium goodies and offer a shopping feature in the near future. Stay tuned!'
  },
]

const AboutToken = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <section className={`about-token ${isDesktopOrLaptop ? 'p-20-pro' : 'p-200'}`} id="about">
      <div className="about-content">
        <div className="p-40 text-50 title-color text-center">FAQ</div>
        {faqs.map((faq, i) => (
          <div key={i} className="">
            <p className="title-color text-20 font-spirit">{faq.title}</p>
            <p className="text-color text-18">{faq.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutToken;
