class NBack < Game

    has_many :trials
    has_many :assets

    attr_accessor :id, :title


    class Trial
      belongs_to :game
      belongs_to :user
      has_many :turns

      attr_accessor :id, :game_id, :max_turns, :completed?, :user_id


      class Turn
        belongs_to :trial
        belongs_to :player
        has_one :audio_element



        attr_accessor :cpu_selection, :user_selection, #{pos: 3, audio: 2}
                        :grid_position, :audio_element

      end
    end

    class Asset
      belongs_to :game

      class Audio_Element < Asset
        attr_accessor :file_path

        attr_accessor :full_name, :note_num, :scale_position

        def interval(note)
          return 'relationship'
        end

      end


    end

end
