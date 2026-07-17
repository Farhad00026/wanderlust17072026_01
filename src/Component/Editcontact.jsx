"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField, Select, ListBox, TextArea } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";

const Editcontact = ({data}) => {
    const {
        _id,
        destinationName,
        country,
        price,
        imageUrl,
        duration,
        departureDate,
        category,
        description,
    } = data;
    const onSubmit = async(e)=>{
          e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        // console.log(destination);

       
      const res= await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`,{
            method:"PATCH",
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(destination) 
        });
        const data = await res.json();
        console.log(data);

    }
    return (
        <div>
            <Modal>
                <Button className="text-green-400 rounded-none" variant="outline"> <BiEdit/> Edit Info</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>                               
                                <Modal.Heading><FaUserEdit /> Edit</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit}
                                        className="p-10 space-y-8"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Destination Name */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={destinationName} name="destinationName" isRequired>
                                                    <Label>Destination Name</Label>
                                                    <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Country */}
                                            <TextField name="country" isRequired defaultValue={country}>
                                                <Label>Country</Label>
                                                <Input placeholder="Indonesia" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>

                                            {/* Category - Updated Select Component */}
                                            <div>
                                                <Select
                                                   defaultValue={category}
                                                    name="category"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select category"
                                                    
                                                >
                                                    <Label>Category</Label>
                                                    <Select.Trigger className="rounded-2xl">
                                                        <Select.Value />
                                                        <Select.Indicator />
                                                    </Select.Trigger>
                                                    <Select.Popover>
                                                        <ListBox>
                                                            <ListBox.Item id="Beach" textValue="Beach">
                                                                Beach
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Mountain" textValue="Mountain">
                                                                Mountain
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="City" textValue="City">
                                                                City
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Adventure" textValue="Adventure">
                                                                Adventure
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Cultural" textValue="Cultural">
                                                                Cultural
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Luxury" textValue="Luxury">
                                                                Luxury
                                                                <ListBox.ItemIndicator />
                                                            </ListBox.Item>
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Price */}
                                            <TextField defaultValue={price} name="price" type="number" isRequired>
                                                <Label>Price (USD)</Label>
                                                <Input
                                                    type="number"
                                                    placeholder="1299"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Duration */}
                                            <TextField name="duration" defaultValue={duration} isRequired>
                                                <Label>Duration</Label>
                                                <Input
                                                    placeholder="7 Days / 6 Nights"
                                                    className="rounded-2xl"
                                                />
                                                <FieldError />
                                            </TextField>

                                            {/* Departure Date */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={departureDate} name="departureDate" type="date" isRequired>
                                                    <Label>Departure Date</Label>
                                                    <Input type="date" className="rounded-2xl" />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Image URL - Removed preview */}
                                            <div className="md:col-span-2">
                                                <TextField name="imageUrl" isRequired defaultValue={imageUrl}>
                                                    <Label>Image URL</Label>
                                                    <Input
                                                        type="url"
                                                        placeholder="https://example.com/bali-paradise.jpg"
                                                        className="rounded-2xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>

                                            {/* Description */}
                                            <div className="md:col-span-2">
                                                <TextField defaultValue={description} name="description" isRequired>
                                                    <Label>Description</Label>
                                                    <TextArea
                                                        placeholder="Describe the travel experience..."
                                                        className="rounded-3xl"
                                                    />
                                                    <FieldError />
                                                </TextField>
                                            </div>
                                        </div>

                                        {/* Buttons */}

                                        <Modal.Footer>
                                            <Button type="submit" variant="outline" >Save</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Editcontact;