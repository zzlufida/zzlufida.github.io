window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12134","name":"report_jhxdwwdd","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create   view report_jhxdwwdd\r\nas\r\n\r\nselect  dd.*,unit1.ccomunitname,cinvname,cinvstd,\r\nic.cinvccode,cinvcname\r\n  from (\r\nselect StartDate, convert(nvarchar(10),ProjectId,5) as planid,InvCode as cinvcode,PlanQty as PlanQty,PlanQty-PlanQty as wwddqty\r\n\tfrom mps_netdemand a inner join bas_part  b on a.PartId = b.PartId \r\nwhere supplytype = 2\r\nunion all\r\nselect dArriveDate,'',cInvCode,0,iQuantity as wwddqty \r\nFrom OM_MODetails \r\nwhere cSource='mrp'\r\n) dd\r\ninner join inventory i on dd.cinvcode=i.cinvcode\r\n\tleft join ComputationUnit as Unit1 on i.cComUnitCode=Unit1.cComUnitCode\r\n\tleft join inventoryclass ic on i.cinvccode=ic.cinvccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"report_jhxdwwdd"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280782","object_id":"column-280782","name":"StartDate","name_without_path":"StartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280783","object_id":"column-280783","name":"planid","name_without_path":"planid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280784","object_id":"column-280784","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280785","object_id":"column-280785","name":"PlanQty","name_without_path":"PlanQty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280786","object_id":"column-280786","name":"wwddqty","name_without_path":"wwddqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"29, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280787","object_id":"column-280787","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280788","object_id":"column-280788","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280789","object_id":"column-280789","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280790","object_id":"column-280790","name":"cinvccode","name_without_path":"cinvccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280791","object_id":"column-280791","name":"cinvcname","name_without_path":"cinvcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};