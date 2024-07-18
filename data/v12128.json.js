window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12128","name":"report_cgdbbb","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view report_cgdbbb    \r\nas    \r\n    \r\nselect  dd.*,cVenAbbName,cdepname,unit1.ccomunitname,cinvname,cinvstd,  ic.cinvccode,cinvcname    \r\n    \r\n    \r\n  from (    \r\nselect dArriveDate, cdepcode,cVenCode,cinvcode , iquantity as iddqty,iquantity-iquantity as irkqty,iquantity-iquantity as itkqty    \r\n from po_pomain  a inner join  po_podetails b on a.poid = b.poid    \r\nunion all    \r\nselect ddate,cdepcode,cVenCode,cinvcode,0,case when iquantity >0  then iquantity else 0 end as irkqty,    \r\n case when iquantity <0  then iquantity else 0 end as itkqty    \r\n from rdrecord01 a inner join rdrecords01 b on a.id=b.id    \r\n where cvouchtype='01' and isnull(iposid,0) <> 0 and isnull(cbustype,'')<>'委外加工' and  isnull(cbustype,'')<>'一般贸易进口') dd    \r\ninner join vendor c on dd.cVenCode =c.cVenCode    \r\n left join department de on dd.cdepcode =de.cdepcode    \r\n inner join inventory i on dd.cinvcode=i.cinvcode    \r\n left join ComputationUnit as Unit1 on i.cComUnitCode=Unit1.cComUnitCode    \r\n left join inventoryclass ic on i.cinvccode=ic.cinvccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"report_cgdbbb"},{"field":"Type","value":"View"}],"columns":[{"id":"column-280670","object_id":"column-280670","name":"dArriveDate","name_without_path":"dArriveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280671","object_id":"column-280671","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280672","object_id":"column-280672","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280673","object_id":"column-280673","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280674","object_id":"column-280674","name":"iddqty","name_without_path":"iddqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280675","object_id":"column-280675","name":"irkqty","name_without_path":"irkqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"31, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280676","object_id":"column-280676","name":"itkqty","name_without_path":"itkqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"31, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280677","object_id":"column-280677","name":"cVenAbbName","name_without_path":"cVenAbbName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280678","object_id":"column-280678","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280679","object_id":"column-280679","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280680","object_id":"column-280680","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280681","object_id":"column-280681","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280682","object_id":"column-280682","name":"cinvccode","name_without_path":"cinvccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-280683","object_id":"column-280683","name":"cinvcname","name_without_path":"cinvcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};