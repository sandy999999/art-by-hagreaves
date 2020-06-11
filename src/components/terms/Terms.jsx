import React from "react";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

export function About() {
  return (
    <Container>
      <Heading title="Sales Terms & Conditions " />
      <Row className="row">
        <Col>
          <h2>Contact Information</h2>
          <p>
            Send{" "}
            <b>
              <a className="email" href="mailto: t.k.hargreaves@gmail.com">
                Email
              </a>
            </b>
          </p>
          <p>
            Or contact us{" "}
            <NavLink className="email" to="/contact">
              <b>here</b>
            </NavLink>
          </p>
        </Col>
      </Row>
      <Row className="row">
        <Col>
          <h2>1. Contract</h2>
          <p>
            The contract consists of these Sales Conditions, information given in the
            ordering solution, and any specially agreed conditions. In the event of a
            conflict between pieces of information, precedence goes to what has been
            specially agreed between the parties, as long as this does not conflict with
            mandatory legislation. In addition, the contract will be complemented by
            relevant statutory provisions that regulate the pur- chase of goods between
            traders and consumers.
          </p>
        </Col>
        <Col>
          <h2>2. Parties</h2>
          <p>
            The seller is Thomas Hargreaves, t.k.hargreaves@gmail.com, org nr. 817 237
            762, and is designated in the following as the Seller. The purchaser is the
            consumer who places the order, and is designated in the following as the
            Purchaser.
          </p>
        </Col>
        <Col>
          <h2>3. Price</h2>
          <p>
            The stated price for the good and services is the total price to be paid by
            the Purchaser. This price includes all taxes and additional costs. The
            Purchaser shall not be charged for any further costs of which the Seller has
            not informed the Purchaser before the purchase.
          </p>
        </Col>
        <Col>
          <h2>4. Conclusion of Contract</h2>
          <p>
            The contract is binding for both parties as soon as the Purchaser has sent the
            order to the Seller. However, a party is not bound by the contract if there
            are orthographical or typological errors in the offer from the Seller in the
            ordering solution of the online shop or in the Purchaser’s order, and the
            other party realised or should have realised that such an error was present.
          </p>
        </Col>
      </Row>
      <Row className="row">
        <Col>
          <h2>5. Payment</h2>
          <p>
            The Seller may charge the Purchaser for the good from the time it is sent from
            the Seller to the Purchaser. If the Purchaser uses a credit or debit card to
            make the payment, the Seller may hold the funds on the card when the order is
            placed. The card will be charged on the same day the good is sent. If the
            Seller offers post-delivery invoicing, the invoice shall be issued when the
            good is dispatched. The due date shall be written on the invoice and must be a
            minimum of 14 days from when the Purchaser receives the delivery. Purchasers
            under the age of 18 may not pay via post-delivery invoicing.
          </p>
        </Col>
        <Col>
          <h2>6. Delivery</h2>
          <p>
            Delivery has occurred once the Purchaser or his/ her representative has taken
            possession of the item. If the delivery time is not stated in the ordering
            solution, the Seller shall deliver the good to the Purchaser within a
            reasonable time frame and no later than 30 days after the order is placed by
            the customer. The good shall be delivered to the Purchaser unless stated
            otherwise.
          </p>
        </Col>
        <Col>
          <h2>7. Product Risk</h2>
          <p>
            Product risk is assumed by the Purchaser as soon as the item is taken over by
            the Purchaser or his/ her representative in accordance with Section 6
          </p>
        </Col>
      </Row>
      <Row className="row">
        <Col>
          <h2>8. Right to Cancel</h2>
          <p>
            Unless the contract is exempt from the right to cancel, the Purchaser may
            cancel the order in accordance with the Cancellation Act. The Purchaser must
            inform the Seller that he/she will exercise this right within 14 days after
            the start of the cancellation period. This time limit includes all calendar
            days. If the period ends on a Saturday, Sunday or public holiday, the period
            will be extended until the next business day. The deadline to exercise one’s
            right to cancel will be seen as met if notice is sent before the end of the
            cancellation period. The Purchaser has the burden of proof for demonstrating
            that the right has been asserted, and notice must therefore be submitted in
            writing (via the cancellation form, email or letter).
          </p>
          <p>
            <b>The cancellation period begins as follows:</b>
            <ul>
              <li>
                In the purchase of individual goods, the cancellation period will begin on
                the day after the good is/goods are
              </li>
              <li>
                If a subscription is being sold, or the contract contains the regular
                delivery of identical goods, the period begins on the day after the first
                shipment is received.
              </li>
              <li>
                If the purchase consists of several deliveries, the period will begin on
                the day after the final delivery is
              </li>
            </ul>
          </p>
          <p>
            The cancellation period will be extended to 12 months after the end of the
            original period should the Seller not inform the Purchaser of the right to
            cancel and the standard cancellation form before the conclusion of the
            contract. This will also apply if information on terms and conditions, time
            limits and procedures for exercising the right to cancel is insufficient.
            However, if the trader gives this infor- mation during these 12 months, the
            cancellation pe- riod ends 14 days after the day the Purchaser re- ceived the
            information. When the right to cancel is exercised, the good must be returned
            to the Seller within a reasonable amount of time and no later than 14 days
            after no- tice has been given on the intention to exercise the right. The
            Purchaser must cover the direct costs associated with returning the good,
            unless otherwise agreed or the Seller has not informed the Purchaser that
            he/she has to cover the return costs. The Seller may not set fees for the
            Purchaser’s use of the right to cancel. The Purchaser may check or test the
            good in an appropriate manner in order to determine the nature, properties and
            function of the good without affecting the right to cancel. If the checking or
            testing goes beyond what is reasonable and ne- cessary, the Purchaser may be
            responsible for any reduction in the good’s original value. The Seller is
            obligated to pay back the purchase sum to the Purchaser without undue delay,
            and no later than 14 days after the Seller received notice on the Purchaser’s
            decision to exercise the right to cancel. The Seller has the right to retain
            the repay- ment until it has received the goods from the Pur- chaser, or until
            the Purchaser has documented that the goods have been sent back.
          </p>
        </Col>
        <Col>
          <h2>9. Delays and non-delivery</h2>
          <p>
            If the Seller does not deliver the good or delivers it late according to the
            terms of the parties’ contract, and this is not due to the Purchaser or to
            conditions on the part of the Purchaser, the Purchaser may, in accordance with
            Chapter 5 of the Consumer Purchases Act, withhold the purchase sum, de- mand
            performance of the contract, terminate the contract and/or demand compensation
            from the Seller, according to the relevant circumstances. For demands of
            remedy for breach of contract, notice should be given in writing for the
            purposes of documentation (e.g. by email).
          </p>
          <h3>Performance</h3>
          <p>
            The Purchaser may affirm the purchase and demand performance from the Seller.
            The Purchaser may not however demand performance if there is a barrier to
            performance the Seller cannot overcome, or if performance would cause a great
            disadvantage or expense to the Seller that is out of proportion to the
            Purchaser’s interest in the performance. Should these obstacles be removed
            within a reasonable amount of time, however, the Purchaser may demand
            performance. The Purchaser loses his/her right to demand per- formance if
            he/she waits an unreasonably long time to make the claim.
          </p>
          <h3>Termination</h3>
          <p>
            If the Seller does not deliver the good at the time set for delivery, the
            Purchaser shall call on the Seller to deliver within a reasonable additional
            time frame for performance. If the seller does not deliver the good within the
            additional time frame, the Purchaser may cancel the purchase. The Purchaser
            may however cancel the purchase immediately if the Seller refuses to deliver
            the good. This also applies to cases in which delivery at the agreed time was
            a decisive factor in the conclusion of the contract, or if the Purchaser has
            informed the Seller that the delivery time is a decisive factor. If the item
            is delivered after the additional time frame set by the consumer or after the
            delivery time that was a decisive factor in the conclusion of the contract,
            termination must be asserted within a reasonable time frame after the
            Purchaser was informed of the delivery.
          </p>
          <h3>Compensation</h3>
          <p>
            The Purchaser may demand compensation for losses incurred as a result of the
            delay. However, this does not apply to cases in which the Seller can assert
            that the delay was due to obstacles outside the Seller’s control that could
            not have reasonably been fore- seen at the time the contract was concluded,
            could not have been avoided or the consequences of which could not have been
            overcome.
          </p>
        </Col>
      </Row>
      <Row className="row">
        <Col>
          <h2>10. Defective Goods</h2>
          <p>
            f the good is defective, the Purchaser must notify the Seller that he/she
            wishes to invoke the defect within a reasonable amount of time after the
            defect was discovered or should have been discovered. The Purchaser is always
            considered to have given timely notice if it occurs within two months after
            the defect was discovered or should have been discovered. Notice may be given
            no later than two years after the Purchaser took possession of the good. If
            the good or parts of it are meant to last considerably longer than two years,
            this deadline is extended to five years. If the good has a defect and this is
            not due to the Purchaser or to conditions on the part of the Purchaser, the
            Purchaser may, in accordance with Chapter 6 of the Consumer Purchases Act,
            withhold the purchase sum, choose between repair and replacement, demand a
            price reduction, demand that contract be terminated and/or demand compensa-
            tion from the Seller, according to the relevant cir- cumstances. Notice should
            be given to the Seller in writing.
          </p>
          <h3>Repair or Replacement</h3>
          <p>
            The Purchaser may choose between having the defect repaired or the delivery of
            an equivalent item. The Seller may however oppose the Purchaser’s claim if
            carrying out the claim is impossible or causes the Seller to incur
            unreasonable expenses. Repair or replacement shall be performed within a
            reason- able amount of time. The Seller does not as a rule have the right to
            more than two attempts to cure for the same defect.
          </p>
          <h3>Price Reduction</h3>
          <p>
            The Purchaser may demand a suitable price redu- ction if the good is not
            repaired or replaced. This means that that relation between the reduced and
            originally agreed price corresponds to the relation between the item’s value
            in defective condition and the condition according to the original contract.
            If special circumstances call for it, the price reduction may instead
            correspond to the defect’s impact on the Purchaser.
          </p>
          <h3>Termination</h3>
          <p>
            If the good is not repaired or replaced, the Purchaser may also cancel the
            purchase in cases where the defect is not immaterial.
          </p>
        </Col>
        <Col>
          <h2>11. Seller’s rights</h2>
          <p>
            If the Purchaser does not pay or otherwise fulfil his/her duties according to
            the contract and/or the law, and this is not due to the Seller or to
            conditions on the part of the Seller, the Seller may, in accor- dance with the
            rules in Chapter 9 of the Consumer Purchases Act, withhold the good, demand
            perfor- mance of the contract, terminate the contract and demand compensation
            from the Purchaser, accor- ding to the relevant circumstances. The Seller may
            also, according to the relevant circumstances, charge interest for late
            payment, a collection fee and a reasonable fee for uncollected goods.
          </p>
          <h3>Fulfillment</h3>
          <p>
            If the Purchaser does not pay, the Seller may af- firm the purchase and demand
            that the Purchaser pay the purchase sum. If the good is not delivered, the
            Seller will lose its right if it takes an unreaso- nably long time to make the
            claim.
          </p>
          <h3>Termination</h3>
          <p>
            Upon significant non-payment breach or any oth- er significant breach by the
            Purchaser, the Seller may terminate the contract. However, the Seller may not
            terminate the contract after the purchase sum has been paid. The Seller may
            also terminate the purchase if the Purchaser does not pay within a reasonable
            additional time frame for fulfilment set by the Seller. Interest relating to
            late payment/collection fee If the Purchaser does not pay the purchase sum
            specified in the contract, the Seller may charge interest on the purchase sum
            according to the Act Relating to Interest on Overdue Payments. In cases where
            payment is not made, the debt may be sent for collection after a warning has
            been issued, and the Purchaser may then be held responsible for fees according
            to the Act relating to Debt Collection and Other Debt Recovery.
          </p>
          <h3>Fees for uncollected, non-prepaid items</h3>
          <p>
            If the Purchaser fails to collect unpaid goods, the Seller may charge the
            Purchaser a fee. The fee shall at maximum cover the Seller’s actual expenses
            for delivering the good to the Purchaser. Purchasers under 18 years of age
            cannot be charged this fee.
          </p>
        </Col>
      </Row>
      <Row className="row">
        <Col>
          <h2>12. Warranties</h2>
          <p>
            Warranties given by the Seller or manufacturer give the Purchaser additional
            rights beyond those mandatory rights he/she has by mandatory law. Thus, a
            warranty does not imply any limitation on the Purchaser’s right to give notice
            or make claims in case of delay or defect according to Sections 9 and 10.
          </p>
        </Col>
        <Col>
          <h2>13. Personal Data</h2>
          <p>
            The Seller is the party responsible for handling collected personal data.
            Unless the Purchaser consents otherwise, the Seller may only obtain and store
            whatever personal data is necessary for the Seller to complete its duties
            according to the con- tract. The Purchaser’s personal data shall only be given
            to others if this is necessary for the Seller to fulfil the contract with the
            Purchaser, or in cases where this is required by law.
          </p>
        </Col>
        <Col>
          <h2>14. Conflict Resolution</h2>
          <p>
            Claims must be directed to the Seller within a reasonable time frame in
            accordance with Sections 9 and 10. The parties shall attempt to resolve any
            disputes out of court. If this is not successful, the Purchaser may contact
            the Consumer Council of Norway for mediation. The Consumer Council may be
            reached on (+47) 23 400 500 or at{" "}
            <a href="https://www.forbrukerradet.no">Forbrukerrådet</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
