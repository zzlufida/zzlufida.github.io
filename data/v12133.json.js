window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12133","name":"report_jhxdscdd","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create   view report_jhxdscdd\r\nas\r\n\r\nselect  dd.*,unit1.ccomunitname,cinvname,cinvstd,\r\nic.cinvccode,cinvcname\r\n  from (\r\nselect StartDate, convert(nvarchar(10),ProjectId,5) as planid,InvCode,PlanQty as planqty,PlanQty-PlanQty as scddqty\r\n\tfrom mps_netdemand a inner join bas_part  b on a.PartId = b.PartId  \r\nwhere supplytype = 3\r\nunion all\r\nselect StartDate,'',InvCode,0,Qty as scddqty \r\nfrom mom_orderdetail a inner join mom_morder b on a.MoDId = b.MoDId \r\nwhere plancode is not null\r\n) dd\r\ninner join inventory i on dd.InvCode=i.cinvcode\r\n\tleft join ComputationUnit as Unit1 on i.cComUnitCode=Unit1.cComUnitCode\r\n\tleft join inventoryclass ic on i.cinvccode=ic.cinvccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"report_jhxdscdd"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280772","object_id":"column-280772","name":"StartDate","name_without_path":"StartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280773","object_id":"column-280773","name":"planid","name_without_path":"planid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280774","object_id":"column-280774","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280775","object_id":"column-280775","name":"planqty","name_without_path":"planqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280776","object_id":"column-280776","name":"scddqty","name_without_path":"scddqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"29, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280777","object_id":"column-280777","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280778","object_id":"column-280778","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280779","object_id":"column-280779","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280780","object_id":"column-280780","name":"cinvccode","name_without_path":"cinvccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280781","object_id":"column-280781","name":"cinvcname","name_without_path":"cinvcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};