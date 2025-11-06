import { Mail, MapPin, Phone } from "lucide-react";
import PropTypes from "prop-types";

export const ContactInfo = () => (
  <div className="space-y-6">
    <InfoItem
      icon={<Mail className="h-6 w-6 text-primary" />}
      label="Email"
      value="ashishthomas13@zohomail.in"
      href="mailto:ashishthomas13@zohomail.in"
    />

    <InfoItem
      icon={<Phone className="h-6 w-6 text-primary" />}
      label="Phone"
      value="+91 8105124824"
      href="tel:+918105124824"
    />

    <InfoItem
      icon={<MapPin className="h-6 w-6 text-primary" />}
      label="Location"
      value="Bangalore, Karnataka, India"
    />
  </div>
);

const InfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium">{label}</h4>
      {href ? (
        <a
          href={href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-muted-foreground">{value}</span>
      )}
    </div>
  </div>
);

InfoItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
};
