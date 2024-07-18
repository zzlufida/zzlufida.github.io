window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12722","name":"v_clientStation","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW v_clientStation \r\nAS \r\n\tSELECT DISTINCT cstation \r\n\tFROM UFSystem..UA_Log AS L\r\n\tINNER JOIN  (SELECT * FROM UFSystem..UA_AccountDatabase WHERE CDataBase = DB_NAME()) AS A ON L.cAcc_Id = A.cacc_id \r\n\tAND L.iyear >= A.iBeginYear AND L.iyear <= ISNULL(A.iEndYear, YEAR(GETDATE()))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_clientStation"},{"field":"Type","value":"View"}],"columns":[{"id":"column-317925","object_id":"column-317925","name":"cstation","name_without_path":"cstation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};