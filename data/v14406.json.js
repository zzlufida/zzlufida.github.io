window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14406","name":"zw_code_contraref","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--------------------add by xiwen end 在单据模板视图中加入bExtended字段------------------------\r\n\r\n\r\n\r\n--mengyp begin\r\nCREATE view zw_code_contraref as\r\nSELECT     b.class_order, Code_ContraRef.cclass, ccode, ccode_name  \r\n \r\nFROM         dbo.Code_ContraRef  \r\ninner join (select cclass,case when cclass=N'损益' then 7 else max(inum) end as class_order from ufsystem..gl_codeclass  group by cclass ) b\r\non Code_ContraRef.cclass=b.cclass\r\n INNER JOIN  (select Max(iyear) as iyear from U8LoginProcess a WITH (NOLOCK)   inner join master..sysprocesses b     \r\n   on a.cStation=b.hostname and a.cProcessId=b.hostprocess where b.spid=@@spID and (cSub_id='DP' )  ) as C  ON Code_ContraRef.iYear = C.iYear","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"zw_code_contraref"},{"field":"Type","value":"View"}],"columns":[{"id":"column-427038","object_id":"column-427038","name":"class_order","name_without_path":"class_order","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-427039","object_id":"column-427039","name":"cclass","name_without_path":"cclass","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"14","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-427040","object_id":"column-427040","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-427041","object_id":"column-427041","name":"ccode_name","name_without_path":"ccode_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};