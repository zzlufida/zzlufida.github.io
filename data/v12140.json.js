window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12140","name":"report_ycdddbbb","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  view report_ycdddbbb\r\nas\r\nselect  supplydate,mpsflag,version,dd.cinvcode,ycqty,ddqty,\r\nunit1.ccomunitname,cinvname,cinvstd,\r\nic.cinvccode,cinvcname,\r\n(case when isnull(cverifier,'') ='' then 'N' else 'Y' end) as vstate,\r\n(case when isnull(clinecloser,'') ='' then 'N' else 'Y' end) as cstate\r\n  from (\r\nselect SupplyDate,d.MpsFlag,e.Version,b.InvCode as cinvcode,'' as cVerifier,'' as clinecloser,FQty as ycqty,fqty-fqty as ddqty\r\n\tfrom mps_forecastdata a inner join bas_part b on a.partid = b.partid\r\n\tinner join mps_forecast d on a.forecastid = d.forecastid\r\n        inner join mps_forecastvs e on d.FVersionId = e.ForecastVsId\r\nunion all\r\n\r\nselect dpredate,'','',cinvcode,cverifier as cVerifier,cSCloser as clinecloser,0,iquantity as ddqty\r\n\tfrom so_somain  a inner join  so_sodetails b on a.id=b.id\r\nunion all\r\nselect dshippingdate,'','',cinvcode,cverifier as cVerifier,clinecloser as clinecloser,0,fquantity as ddqty\r\n\tfrom ex_order a inner join ex_orderdetail b on a.id=b.id) dd\r\n\r\ninner join inventory i on dd.cinvcode=i.cinvcode\r\n       left join ComputationUnit as Unit1 on i.cComUnitCode=Unit1.cComUnitCode\r\n\tleft join inventoryclass ic on i.cinvccode=ic.cinvccode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"report_ycdddbbb"},{"field":"Type","value":"View"}],"columns":[{"id":"column-281110","object_id":"column-281110","name":"supplydate","name_without_path":"supplydate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281111","object_id":"column-281111","name":"mpsflag","name_without_path":"mpsflag","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281112","object_id":"column-281112","name":"version","name_without_path":"version","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281113","object_id":"column-281113","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281114","object_id":"column-281114","name":"ycqty","name_without_path":"ycqty","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281115","object_id":"column-281115","name":"ddqty","name_without_path":"ddqty","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281116","object_id":"column-281116","name":"ccomunitname","name_without_path":"ccomunitname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281117","object_id":"column-281117","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281118","object_id":"column-281118","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281119","object_id":"column-281119","name":"cinvccode","name_without_path":"cinvccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281120","object_id":"column-281120","name":"cinvcname","name_without_path":"cinvcname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281121","object_id":"column-281121","name":"vstate","name_without_path":"vstate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-281122","object_id":"column-281122","name":"cstate","name_without_path":"cstate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};