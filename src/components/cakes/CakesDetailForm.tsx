import React, { FunctionComponent } from "react";
import { CreateCakeRequest, UpdateCakeRequest} from "shared/types/cakes";
import { Form } from "react-bootstrap";

type Props = {
  request: CreateCakeRequest | UpdateCakeRequest,
  setRequestCallback: ((state: any) => void),
  errors?: any;
}

const CakesDetailForm: FunctionComponent<Props> = (props: Props) => {


  return (
    <div className="cakes-detail-form-component">
      <Form.Group>
        <Form.Label>Cake Name</Form.Label>
        <Form.Control 
          type="text" 
          value={props.request.name || ""} 
          onChange={(e) => props.setRequestCallback({...props.request, name: e.currentTarget.value})}
          isInvalid={props.errors?.name}
        />
        {props.errors?.name !== "" && <Form.Control.Feedback type="invalid">{props.errors?.name}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          value={props.request.comment || ""}
          onChange={(e) => props.setRequestCallback({...props.request, comment: e.currentTarget.value})}
          isInvalid={props.errors?.comment}
        />
        {props.errors?.comment !== "" && <Form.Control.Feedback type="invalid">{props.errors?.comment}</Form.Control.Feedback>}
      </Form.Group>
      <Form.Group>
        <Form.Label>Image Url</Form.Label>
        <Form.Control
          type="text"
          value={props.request.imageUrl || ""}
          onChange={(e) => props.setRequestCallback({...props.request, imageUrl: e.currentTarget.value})}
          isInvalid={props.errors?.imageUrl}
        />
        {props.errors?.imageUrl !== "" && <Form.Control.Feedback type="invalid">{props.errors?.imageUrl}</Form.Control.Feedback>}
      </Form.Group>
      
      <Form.Group>
        <Form.Label>Yum Factor</Form.Label>
        <Form.Control 
          type="number" 
          value={props.request.yumFactor} 
          min={1} max={5} step={1}
          onChange={(e) => props.setRequestCallback({...props.request, yumFactor: parseInt(e.currentTarget.value) || 1})}
          isInvalid={props.errors?.yumFactor}
        />
        {props.errors?.yumFactor !== "" && <Form.Control.Feedback type="invalid">{props.errors?.yumFactor}</Form.Control.Feedback>}
      </Form.Group>
    </div>
  )
}

export default CakesDetailForm;