import './no-data.scss';

export interface NoDataProps {
  noDataText: string;
}

export const NoData: React.FC<NoDataProps> = ({ noDataText }) => {
  return (
    <div className="no-data-container">
      <span className="no-data-text">{noDataText}</span>
    </div>
  );
};
