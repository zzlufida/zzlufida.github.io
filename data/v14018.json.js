window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14018","name":"V_ST_SNscrapvouchre","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_ST_SNscrapvouchre \r\n\tas \r\n\tselect t.id ,t.cspcode as ccode,cvouchtype as  cvouchtype ,\r\n\t\tN'' as crdcode,N'' as crdname,\r\n\t\tt.cinwhcode as cwhcode,w1.cwhname as cwhname,\r\n\t\tisnull(t.coutwhcode,'') as cwhcode2,\r\n\t\t--t.cowhcode as coutwhcode,w2.cwhname as coutwhname,\r\n\t\tcvouchtype  as cvouchtypename,convert(money,t.ufts) as ufts,\r\n\t\tN'' as cbustype,\r\n\t\tid as sttnid ,t.cverifyperson as chandler,ddate,csource\r\n\t\tfrom scrapvouch  t \r\n\t\tinner join warehouse W1 on t.cinwhcode=W1.cwhcode\r\n\t\t--inner join warehouse W2 on t.cowhcode=W2.cwhcode\r\n\t\t--left join Rd_Style R1 on t.cirdcode=R1.crdcode\r\n\t\t--left join Rd_Style R2 on t.cordcode=R1.crdcode\r\n--\t\tinner join v_aa_enum on v_aa_enum.enumtype=N'ST.VouchType' and rdrecord.cvouchtype=v_aa_enum.enumcode\r\n\r\n-- select * from scrapvouchs \r\n-- select * from scrapvouch","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_ST_SNscrapvouchre"},{"field":"Type","value":"View"}],"columns":[{"id":"column-411930","object_id":"column-411930","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411931","object_id":"column-411931","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411932","object_id":"column-411932","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411933","object_id":"column-411933","name":"crdcode","name_without_path":"crdcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411934","object_id":"column-411934","name":"crdname","name_without_path":"crdname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411935","object_id":"column-411935","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411936","object_id":"column-411936","name":"cwhname","name_without_path":"cwhname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411937","object_id":"column-411937","name":"cwhcode2","name_without_path":"cwhcode2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411938","object_id":"column-411938","name":"cvouchtypename","name_without_path":"cvouchtypename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411939","object_id":"column-411939","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411940","object_id":"column-411940","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411941","object_id":"column-411941","name":"sttnid","name_without_path":"sttnid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411942","object_id":"column-411942","name":"chandler","name_without_path":"chandler","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411943","object_id":"column-411943","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-411944","object_id":"column-411944","name":"csource","name_without_path":"csource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};