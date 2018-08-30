import { h, render } from 'preact';
import { Button } from 'preact-bootstrap-ui';

render((
  <div>
    <Button type="button" color="primary" size="lg" fullWidth={true}>Click me</Button>
  </div>
), document.body);
