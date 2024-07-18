window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10129","name":"CAQ_PlanAmount","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.CAQ_PlanAmount\r\nAS\r\nSELECT b.iRealCOID AS cPPID, SUM(a.iPdtUnitAMo) AS iPdtUnitAMoOfSum\r\nFROM dbo.Caq_COPlan c INNER JOIN\r\n      dbo.Caq_COReal b ON c.cDeptID = b.cDeptID AND c.Version = b.Version AND \r\n      c.iPartID = b.iPartID AND c.IdentCode = b.IdentCode INNER JOIN\r\n      dbo.CA_PlanC a ON c.iPlanCOID = a.cPPID\r\nGROUP BY b.iRealCOID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CAQ_PlanAmount"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174263","object_id":"column-174263","name":"cPPID","name_without_path":"cPPID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174264","object_id":"column-174264","name":"iPdtUnitAMoOfSum","name_without_path":"iPdtUnitAMoOfSum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};