window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11276","name":"hr_v_HM104_body","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_HM104_body as  select hr_hi_edu.blastflag,hr_hi_edu.cPsn_Num,hr_hi_edu.cVoucherId,hr_hi_edu.ddegreedate,hr_hi_edu.dentranceDate,hr_hi_edu.dgrduateDate,hr_hi_edu.iRecordId,hr_hi_edu.nedusystem,hr_hi_edu.nstatus2,hr_hi_edu.PK_hr_hi_edu,hr_hi_edu.vcertifcode,hr_hi_edu.vdegreeunit,hr_hi_edu.vmemo,hr_hi_edu.vschool,hr_hi_edu.vstatus1,hr_hi_edu.reducation,hr_hi_edu.rdegree,hr_hi_edu.rmajor,hr_hi_edu.rstudymode from hr_hi_edu","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_HM104_body"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224411","object_id":"column-224411","name":"blastflag","name_without_path":"blastflag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224412","object_id":"column-224412","name":"cPsn_Num","name_without_path":"cPsn_Num","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224413","object_id":"column-224413","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224414","object_id":"column-224414","name":"ddegreedate","name_without_path":"ddegreedate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224415","object_id":"column-224415","name":"dentranceDate","name_without_path":"dentranceDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224416","object_id":"column-224416","name":"dgrduateDate","name_without_path":"dgrduateDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224417","object_id":"column-224417","name":"iRecordId","name_without_path":"iRecordId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224418","object_id":"column-224418","name":"nedusystem","name_without_path":"nedusystem","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"3, 1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224419","object_id":"column-224419","name":"nstatus2","name_without_path":"nstatus2","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"18, 0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224420","object_id":"column-224420","name":"PK_hr_hi_edu","name_without_path":"PK_hr_hi_edu","description":null,"is_pk":false,"is_identity":false,"data_type":"UFUID: uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224421","object_id":"column-224421","name":"vcertifcode","name_without_path":"vcertifcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"28","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224422","object_id":"column-224422","name":"vdegreeunit","name_without_path":"vdegreeunit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224423","object_id":"column-224423","name":"vmemo","name_without_path":"vmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224424","object_id":"column-224424","name":"vschool","name_without_path":"vschool","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224425","object_id":"column-224425","name":"vstatus1","name_without_path":"vstatus1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224426","object_id":"column-224426","name":"reducation","name_without_path":"reducation","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224427","object_id":"column-224427","name":"rdegree","name_without_path":"rdegree","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224428","object_id":"column-224428","name":"rmajor","name_without_path":"rmajor","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224429","object_id":"column-224429","name":"rstudymode","name_without_path":"rstudymode","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};