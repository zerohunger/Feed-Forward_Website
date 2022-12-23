import { Button, NativeSelect, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import {
  IconAt,
  IconPhoneCall,
  IconSchool,
  IconUserCircle,
} from "@tabler/icons";

interface ARequestDemoDialogProps {
  onSubmitClick: (data: {
    name: string;
    schoolName: string;
    role: ICPRole;
    phoneNumber: string;
    email?: string;
  }) => void;
}

export enum ICPRole {
  None = "Select Role",
  SchoolOwner = "School Owner",
  Trustee = "Trustee",
  Principal = "Principal",
  VicePrincipal = "Vice Principal",
  Teacher = "Teacher",
  Other = "Other",
}

export function RequestDemoDialog(props: ARequestDemoDialogProps) {
  const [name, setName] = useState<string>();
  const [schoolName, setSchoolName] = useState<string>();
  const [role, setRole] = useState<ICPRole>(ICPRole.None);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();

  function DidSelectRole(selectedRole: string) {
    switch (selectedRole) {
      case "Select Role":
        setRole(ICPRole.None);
        return;
      case "School Owner":
        setRole(ICPRole.SchoolOwner);
        return;
      case "Trustee":
        setRole(ICPRole.Trustee);
        return;
      case "Principal":
        setRole(ICPRole.Principal);
        return;
      case "Vice Principal":
        setRole(ICPRole.VicePrincipal);
        return;
      case "Teacher":
        setRole(ICPRole.Teacher);
        return;
      case "Other":
        setRole(ICPRole.Other);
        return;
    }
  }

  function DidSubmit() {
    let isValidName = name != null && name.length > 0;
    let isValidSchoolName = schoolName != null && schoolName.length > 0;
    let isValidPhoneNumber = phoneNumber != null && phoneNumber.length > 0;
    let isValidRole = role != null && role != ICPRole.None;

    if (isValidName == false) {
      return;
    }
    if (isValidSchoolName == false) {
      return;
    }
    if (isValidPhoneNumber == false) {
      return;
    }
    if (isValidRole == false) {
      return;
    }

    props.onSubmitClick({
      name: name!,
      schoolName: schoolName!,
      role: role,
      phoneNumber: phoneNumber!,
      email: email,
    });
  }

  return (
    <Stack>
      <Title style={{ textAlign: "center" }}>Partner With Us</Title>
      <TextInput
        label="School Name"
        withAsterisk
        value={name}
        icon={<IconSchool size={18} />}
        placeholder="School Name"
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        label="Name"
        withAsterisk
        value={schoolName}
        placeholder="Your Name"
        icon={<IconUserCircle size={18} />}
        onChange={(e) => setSchoolName(e.target.value)}
      />
      <NativeSelect
        value={role}
        data={[
          ICPRole.None,
          ICPRole.SchoolOwner,
          ICPRole.Trustee,
          ICPRole.Principal,
          ICPRole.VicePrincipal,
          ICPRole.Teacher,
          ICPRole.Other,
        ]}
        label="Role at school"
        size="md"
        withAsterisk
        onChange={(e) => DidSelectRole(e.target.value)}
      />
      <TextInput
        label="Phone Number"
        type="number"
        withAsterisk
        value={phoneNumber}
        placeholder="8561057510"
        icon={<IconPhoneCall size={18} />}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextInput
        label="Email"
        type="email"
        icon={<IconAt size={18} />}
        value={email}
        placeholder="partner@vignam.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        fullWidth
        onClick={DidSubmit}
        style={{ backgroundColor: "#3174F3" }}
      >
        Submit
      </Button>
    </Stack>
  );
}
