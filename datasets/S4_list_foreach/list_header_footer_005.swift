import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf005-header"), footer: Text("hf005-footer")) {
                Text("hf005-i1")
                Text("hf005-i2")
                Text("hf005-i3")
            }
        }
    }
}
