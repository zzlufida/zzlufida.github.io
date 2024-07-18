window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11317","name":"Hr_v_ht_PersonAlert","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE View Hr_v_ht_PersonAlert\r\n\tAS\r\n\tselect cPsn_Num,cPsn_Name,cDept_num,EmploymentForm,dEnterUnitDate,DateAdd(d,30,dEnterUnitDate) as dSignLatestDate \r\n\tfrom hr_hi_person","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Hr_v_ht_PersonAlert"},{"field":"Type","value":"View"}],"columns":[{"id":"column-225668","object_id":"column-225668","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225669","object_id":"column-225669","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225670","object_id":"column-225670","name":"cDept_num","name_without_path":"cDept_num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225671","object_id":"column-225671","name":"EmploymentForm","name_without_path":"EmploymentForm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225672","object_id":"column-225672","name":"dEnterUnitDate","name_without_path":"dEnterUnitDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-225673","object_id":"column-225673","name":"dSignLatestDate","name_without_path":"dSignLatestDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};