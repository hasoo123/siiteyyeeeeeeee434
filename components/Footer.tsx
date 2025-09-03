
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} SimpleStore. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
