window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14240","name":"vwCount_VP","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--14、vwCount_VP\r\nCREATE VIEW vwCount_VP AS\r\nSELECT COUNT(*) AS intVou\r\nFROM UA_SubVoucher\r\nWHERE ISNULL(strIncNode, '') <> ''\r\nUNION ALL\r\nSELECT COUNT(*) AS intCP\r\nFROM UA_CapitalBudgetPlan\r\nWHERE ISNULL(strIncNode, '') <> ''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwCount_VP"},{"field":"Type","value":"View"}],"columns":[{"id":"column-422909","object_id":"column-422909","name":"intVou","name_without_path":"intVou","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};