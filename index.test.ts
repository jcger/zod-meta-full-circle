import z from "zod";

// FAILS with:
// expect(received).toEqual(expected) // deep equality
// Expected: {"metaKey": "metaValue"}
// Received: undefined
test("should keep meta info after serializing and deserializing", () => {
  const testSchema = z.string().meta({ metaKey: "metaValue" });

  const serializedSchema = z.toJSONSchema(testSchema);
  const deserializedSchema = z.fromJSONSchema(serializedSchema);

  expect(z.globalRegistry.get(deserializedSchema)).toEqual(
    z.globalRegistry.get(testSchema)
  );
});
