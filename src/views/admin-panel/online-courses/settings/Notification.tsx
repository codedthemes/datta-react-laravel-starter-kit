import MainCard from 'components/MainCard';
import FormCheck from 'react-bootstrap/FormCheck';

export default function NotificationPage() {
  return (
    <MainCard title="Notification">
      <h6>Enrollment Notifications</h6>
      <p className="text-muted">Get notified via email whenever a student enrolls in your school and/or courses.</p>
      <MainCard className="shadow-none border" bodyClassName="p-3">
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox" className="input-primary" type="checkbox" defaultChecked />
          <FormCheck.Label htmlFor="new-student-checkbox">When a new student joins the school</FormCheck.Label>
        </FormCheck>
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox1" className="input-primary" type="checkbox" defaultChecked />
          <FormCheck.Label htmlFor="new-student-checkbox1">When a student enrolls in a paid course</FormCheck.Label>
        </FormCheck>
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox2" className="input-primary" type="checkbox" />
          <FormCheck.Label htmlFor="new-student-checkbox2">When a student enrolls in a free course</FormCheck.Label>
        </FormCheck>
      </MainCard>

      <h6 className="mt-3 mt-md-5">Comment Notifications</h6>
      <p className="text-muted">Get alerted via email whenever someone engages in a commenting action.</p>
      <MainCard className="shadow-none border" bodyClassName="p-3">
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox3" className="input-primary" type="checkbox" defaultChecked />
          <FormCheck.Label htmlFor="new-student-checkbox3">When a new comment is posted that requires moderation</FormCheck.Label>
        </FormCheck>
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox4" className="input-primary" type="checkbox" />
          <FormCheck.Label htmlFor="new-student-checkbox4">When a new comment is posted on one of your courses</FormCheck.Label>
        </FormCheck>
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox5" className="input-primary" type="checkbox" defaultChecked />
          <FormCheck.Label htmlFor="new-student-checkbox5">When a new comment is posted in a thread you've commented on</FormCheck.Label>
        </FormCheck>
      </MainCard>

      <h6 className="mt-3 mt-md-5">Subscription Notifications</h6>
      <p className="text-muted">Get email notifications for specific subscription events.</p>
      <MainCard className="shadow-none border" bodyClassName="p-3">
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox6" className="input-primary" type="checkbox" defaultChecked />
          <FormCheck.Label htmlFor="new-student-checkbox6">
            When a subscription payment fails or a subscription is canceled due to non-payment
          </FormCheck.Label>
        </FormCheck>
        <FormCheck className="form-switch form-check-reverse text-start mb-2">
          <FormCheck.Input id="new-student-checkbox7" className="input-primary" type="checkbox" defaultChecked />
          <FormCheck.Label htmlFor="new-student-checkbox7">
            When a student cancels their subscription to one of your courses
          </FormCheck.Label>
        </FormCheck>
      </MainCard>
    </MainCard>
  );
}
