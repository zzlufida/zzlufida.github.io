window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11288","name":"hr_v_HM112_header","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_HM112_header as  select hr_om_reEnter.rHouseRegister,hr_om_reEnter.rIDType,hr_om_reEnter.vIDNo,hr_om_reEnter.dBirthDate,hr_om_reEnter.rMarriStatus,hr_om_reEnter.rMaxEdu,hr_om_reEnter.vSchool,hr_om_reEnter.vSpecialty,hr_om_reEnter.rNativePlace,hr_om_reEnter.rNational,hr_om_reEnter.vMobile,hr_om_reEnter.vPhone,hr_om_reEnter.eEmail,hr_om_reEnter.vPostCode,hr_om_reEnter.vContactAddr,hr_om_reEnter.dGraDate,hr_om_reEnter.dJoinJob,hr_om_reEnter.vExpeDate,hr_om_reEnter.vAbMemo,hr_om_reEnter.cVoucherId from hr_om_reEnter where hr_om_reEnter.cCode ='HM111'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_HM112_header"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224603","object_id":"column-224603","name":"rHouseRegister","name_without_path":"rHouseRegister","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224604","object_id":"column-224604","name":"rIDType","name_without_path":"rIDType","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224605","object_id":"column-224605","name":"vIDNo","name_without_path":"vIDNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224606","object_id":"column-224606","name":"dBirthDate","name_without_path":"dBirthDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224607","object_id":"column-224607","name":"rMarriStatus","name_without_path":"rMarriStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224608","object_id":"column-224608","name":"rMaxEdu","name_without_path":"rMaxEdu","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224609","object_id":"column-224609","name":"vSchool","name_without_path":"vSchool","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224610","object_id":"column-224610","name":"vSpecialty","name_without_path":"vSpecialty","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224611","object_id":"column-224611","name":"rNativePlace","name_without_path":"rNativePlace","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224612","object_id":"column-224612","name":"rNational","name_without_path":"rNational","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224613","object_id":"column-224613","name":"vMobile","name_without_path":"vMobile","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224614","object_id":"column-224614","name":"vPhone","name_without_path":"vPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224615","object_id":"column-224615","name":"eEmail","name_without_path":"eEmail","description":null,"is_pk":false,"is_identity":false,"data_type":"UFemail: nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224616","object_id":"column-224616","name":"vPostCode","name_without_path":"vPostCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224617","object_id":"column-224617","name":"vContactAddr","name_without_path":"vContactAddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224618","object_id":"column-224618","name":"dGraDate","name_without_path":"dGraDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224619","object_id":"column-224619","name":"dJoinJob","name_without_path":"dJoinJob","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224620","object_id":"column-224620","name":"vExpeDate","name_without_path":"vExpeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224621","object_id":"column-224621","name":"vAbMemo","name_without_path":"vAbMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224622","object_id":"column-224622","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};