<?php if (! defined('BASEPATH')) exit('No direct script access allowed');

class Tweetable_text_ext
{
    

    var $name           = 'Tweetable Text for Wygwam';
    var $version        = '1.0';
    var $description    = '';
    var $docs_url       = 'https://github.com/marco8757';
    var $settings_exist = 'n';
    

    var $settings       = array();

    /**
     * Constructor
     *
     * @param   mixed   Settings array or empty string if none exist.
     */
    function __construct($settings = '')
    {
        $this->settings = $settings;
    }


    private static $_included_resources = FALSE;


    private $_hooks = array(
        'wygwam_config',
        'wygwam_tb_groups',
    );

    public function activate_extension()
    {
        foreach ($this->_hooks as $hook)
        {
            ee()->db->insert('extensions', array(
                'class'    => get_class($this),
                'method'   => $hook,
                'hook'     => $hook,
                'settings' => '',
                'priority' => 10,
                'version'  => $this->version,
                'enabled'  => 'y'
            ));
        }
    }

    public function update_extension($current = NULL)
    {
        return FALSE;
    }

    public function disable_extension()
    {
        ee()->db->where('class', get_class($this))->delete('extensions');
    }

    public function wygwam_config($config, $settings)
    {
        if (($last_call = ee()->extensions->last_call) !== FALSE)
        {
            $config = $last_call;
        }

        // Check if our toolbar button has been added
        $include_btn = FALSE;

        foreach ($config['toolbar'] as $tbgroup)
        {
            if (in_array('TweetableText', $tbgroup))
            {
                $include_btn = TRUE;
                break;
            }
        }

        if ($include_btn)
        {
            // Add our plugin to CKEditor
            if (!empty($config['extraPlugins']))
            {
                $config['extraPlugins'] .= ',';
            }

            $config['extraPlugins'] .= 'tweetable-text';

            $this->_include_resources();
        }

        return $config;
    }

    public function wygwam_tb_groups($tb_groups)
    {
        if (($last_call = ee()->extensions->last_call) !== FALSE)
        {
            $tb_groups = $last_call;
        }

        $tb_groups[] = array('TweetableText');

        // // Is this the toolbar editor?
        // if ((ee()->input->get('M') == 'show_module_cp') || (ee()->input->get('settings[toolbar][]') == 'TweetableText'))
        // {
            // Give our toolbar button an icon
            $icon_url = URL_THIRD_THEMES.'tweetable-text/ckeditor/twitter.png';
            ee()->cp->add_to_head('<style type="text/css">.cke_button__tweetabletext_icon { background-image: url('.$icon_url.'); !important }</style>');
        // }

        return $tb_groups;
    }

    private function _include_resources()
    {
        // Is this the first time we've been called?
        if (!self::$_included_resources)
        {
            // Tell CKEditor where to find our plugin
            $plugin_url = URL_THIRD_THEMES.'tweetable-text/ckeditor/';
            ee()->cp->add_to_foot('<script type="text/javascript">CKEDITOR.plugins.addExternal("tweetable-text", "'.$plugin_url.'");</script>');

            // Don't do that again
            self::$_included_resources = TRUE;
        }
    }
}
















