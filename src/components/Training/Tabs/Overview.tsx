// File: Overview.tsx
interface OverviewProps {
  course: {
    overview: {
      about: string;
      objectives: string[];
    };
  };
}

const Overview: React.FC<OverviewProps> = ({ course }) => {
  return (
    <div className="font-inter">
      <h3 className="text-xl font-semibold mb-4">About This Course</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {course.overview.about}
      </p>
      
      <h3 className="text-xl font-semibold mb-4">What You wll Learn</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {course.overview.objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;