window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11420","name":"hr_v_WA01_show","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_WA01_show as  select  HR_HI_Person1.cpsn_name AS cPsn_Num,WA_PRDetail.cPsn_Name, Department3.cDepName AS cDeptCode, convert(nvarchar(10),WA_PRDetail.cPRDate,121) cPRDate from wa_prdetail Left join HR_HI_Person as HR_HI_Person1 on WA_PRDetail.cPsn_Num=HR_HI_Person1.cpsn_num Left join Department as Department3 on WA_PRDetail.cDeptCode=Department3.CDepCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_WA01_show"},{"field":"Type","value":"View"}],"columns":[{"id":"column-229086","object_id":"column-229086","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229087","object_id":"column-229087","name":"cPsn_Name","name_without_path":"cPsn_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229088","object_id":"column-229088","name":"cDeptCode","name_without_path":"cDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-229089","object_id":"column-229089","name":"cPRDate","name_without_path":"cPRDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};