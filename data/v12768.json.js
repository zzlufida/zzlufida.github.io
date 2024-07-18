window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12768","name":"v_CO_WcCcView","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW v_CO_WcCcView\r\nAS\r\n\r\n-- cDeptID：成本中心；M.cDepCode: 部门；\r\n\tSelect distinct C.cCode as cDeptID,C.cName as cDepName, M.cDepCode, IsNull(M.bISWCID,0) as bISWCID\r\n\tfrom CA_CostCenter  C\r\n\tLeft Join CA_CostCenterMap M On C.cCode = M.cCostCenterCode\r\n\tWhere C.cProperty = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_CO_WcCcView"},{"field":"Type","value":"View"}],"columns":[{"id":"column-319010","object_id":"column-319010","name":"cDeptID","name_without_path":"cDeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319011","object_id":"column-319011","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319012","object_id":"column-319012","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-319013","object_id":"column-319013","name":"bISWCID","name_without_path":"bISWCID","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};