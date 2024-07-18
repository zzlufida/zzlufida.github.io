window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13571","name":"V_IM_SaleBillToOrderForIm","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW V_IM_SaleBillToOrderForIm\r\nas\r\nselect so_somain.csocode,so_sodetails.cinvcode,so_somain.ccuscode ,customer.ccusname,\r\ncustomer.ccusabbname,so_somain.ddate,so_somain.cexch_name,so_somain.iexchrate,\r\nso_somain.cdepcode,cdepname,so_somain.cpersoncode,cpersonname,so_sodetails.iquantity,\r\nsalebill.inatmoney,salebill.inatsum,salebill.inattax,so_sodetails.isosid,iimid,cquocode\r\nfrom so_sodetails inner join so_somain on so_sodetails.id=so_somain.id \r\nleft join  \r\n(select isosid, sum(salebillvouchs.inatmoney) as inatmoney,sum(salebillvouchs.inatsum) as inatsum,sum(salebillvouchs.inattax) as inattax\r\n from salebillvouch inner join salebillvouchs on salebillvouch.sbvid=salebillvouchs.sbvid group by isosid) salebill\r\non so_sodetails.isosid=salebill.isosid \r\ninner join customer on so_somain.ccuscode=customer.ccuscode\r\ninner join department on so_somain.cdepcode=department.cdepcode \r\nleft join person on so_somain.cpersoncode=person.cpersoncode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_IM_SaleBillToOrderForIm"},{"field":"Type","value":"View"}],"columns":[{"id":"column-386937","object_id":"column-386937","name":"csocode","name_without_path":"csocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386938","object_id":"column-386938","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386939","object_id":"column-386939","name":"ccuscode","name_without_path":"ccuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386940","object_id":"column-386940","name":"ccusname","name_without_path":"ccusname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386941","object_id":"column-386941","name":"ccusabbname","name_without_path":"ccusabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386942","object_id":"column-386942","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386943","object_id":"column-386943","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386944","object_id":"column-386944","name":"iexchrate","name_without_path":"iexchrate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386945","object_id":"column-386945","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386946","object_id":"column-386946","name":"cdepname","name_without_path":"cdepname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386947","object_id":"column-386947","name":"cpersoncode","name_without_path":"cpersoncode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386948","object_id":"column-386948","name":"cpersonname","name_without_path":"cpersonname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386949","object_id":"column-386949","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386950","object_id":"column-386950","name":"inatmoney","name_without_path":"inatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386951","object_id":"column-386951","name":"inatsum","name_without_path":"inatsum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386952","object_id":"column-386952","name":"inattax","name_without_path":"inattax","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386953","object_id":"column-386953","name":"isosid","name_without_path":"isosid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386954","object_id":"column-386954","name":"iimid","name_without_path":"iimid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-386955","object_id":"column-386955","name":"cquocode","name_without_path":"cquocode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};