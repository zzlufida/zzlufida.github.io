window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11274","name":"hr_v_HM103_header","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view  hr_v_HM103_header as  select hr_om_admiteApply.rHouseRegister,hr_om_admiteApply.rNativePlace,hr_om_admiteApply.rNational,hr_om_admiteApply.vMobile,hr_om_admiteApply.vPhone,hr_om_admiteApply.eEmail,hr_om_admiteApply.vPostCode,hr_om_admiteApply.vContactAddr,hr_om_admiteApply.dGraDate,hr_om_admiteApply.dJoinJob,hr_om_admiteApply.vExpeDate,hr_om_admiteApply.vAbMemo,hr_om_admiteApply.cVoucherId from hr_om_admiteApply where hr_om_admiteApply.cCode ='HM102'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_v_HM103_header"},{"field":"Type","value":"View"}],"columns":[{"id":"column-224385","object_id":"column-224385","name":"rHouseRegister","name_without_path":"rHouseRegister","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224386","object_id":"column-224386","name":"rNativePlace","name_without_path":"rNativePlace","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224387","object_id":"column-224387","name":"rNational","name_without_path":"rNational","description":null,"is_pk":false,"is_identity":false,"data_type":"UFreference: nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224388","object_id":"column-224388","name":"vMobile","name_without_path":"vMobile","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224389","object_id":"column-224389","name":"vPhone","name_without_path":"vPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224390","object_id":"column-224390","name":"eEmail","name_without_path":"eEmail","description":null,"is_pk":false,"is_identity":false,"data_type":"UFemail: nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224391","object_id":"column-224391","name":"vPostCode","name_without_path":"vPostCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224392","object_id":"column-224392","name":"vContactAddr","name_without_path":"vContactAddr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224393","object_id":"column-224393","name":"dGraDate","name_without_path":"dGraDate","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224394","object_id":"column-224394","name":"dJoinJob","name_without_path":"dJoinJob","description":null,"is_pk":false,"is_identity":false,"data_type":"UFDate: nchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224395","object_id":"column-224395","name":"vExpeDate","name_without_path":"vExpeDate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224396","object_id":"column-224396","name":"vAbMemo","name_without_path":"vAbMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-224397","object_id":"column-224397","name":"cVoucherId","name_without_path":"cVoucherId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};