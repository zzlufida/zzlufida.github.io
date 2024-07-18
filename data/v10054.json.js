window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10054","name":"CA_Q_PlanC","subtype":"VIEW","is_user_defined":false,"description":null,"script":"Create View CA_Q_PlanC AS \r\nSELECT CA_PlanC.cPPID, CA_PlanC.cAmotype, Sum(CA_PlanC.iPdtUnitAMo) AS iPdtUnitAMoOfSum\r\nFROM CA_PlanC \r\nGROUP BY CA_PlanC.cPPID, CA_PlanC.cAmotype","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CA_Q_PlanC"},{"field":"Type","value":"View"}],"columns":[{"id":"column-173359","object_id":"column-173359","name":"cPPID","name_without_path":"cPPID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173360","object_id":"column-173360","name":"cAmotype","name_without_path":"cAmotype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-173361","object_id":"column-173361","name":"iPdtUnitAMoOfSum","name_without_path":"iPdtUnitAMoOfSum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};