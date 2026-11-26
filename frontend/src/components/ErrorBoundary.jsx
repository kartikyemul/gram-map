import { Component } from "react";

class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="card">
          <h2 className="card-title">Something went wrong on this page.</h2>
          <p className="card-note">Open another page from the sidebar, or refresh.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
