window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11819","name":"Peq_ProfitCenterMapDetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW Peq_ProfitCenterMapDetail\r\nas \r\n\tselect M.AutoID,P.cCode as cProfitCenterCode,P.cName as cProfitCenterName,\r\n\t\t  c.cCode as cCostCenterCode,c.cName as cCostCenterName,D.cDepCode,D.cDepName,\r\n\t\t  M.bDisabled as bDisabled,isnull(M.dDisabledDate,'') as dDisabledDate,isnull(M.dDisabledPeriod,'') as dDisabledPeriod\r\n\tfrom Pe_ProfitCenterMap M \r\n\tLeft join Pe_ProfitCenter P ON P.cCode = M.cCode \r\n\tLeft join CA_CostCenter C ON M.cDeptID = C.cCode And M.iDepType = 0 \r\n\tLeft join Department D On M.cDeptID = D.cDepCode And M.iDepType = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Peq_ProfitCenterMapDetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-255337","object_id":"column-255337","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255338","object_id":"column-255338","name":"cProfitCenterCode","name_without_path":"cProfitCenterCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255339","object_id":"column-255339","name":"cProfitCenterName","name_without_path":"cProfitCenterName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255340","object_id":"column-255340","name":"cCostCenterCode","name_without_path":"cCostCenterCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255341","object_id":"column-255341","name":"cCostCenterName","name_without_path":"cCostCenterName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255342","object_id":"column-255342","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255343","object_id":"column-255343","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255344","object_id":"column-255344","name":"bDisabled","name_without_path":"bDisabled","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255345","object_id":"column-255345","name":"dDisabledDate","name_without_path":"dDisabledDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-255346","object_id":"column-255346","name":"dDisabledPeriod","name_without_path":"dDisabledPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};