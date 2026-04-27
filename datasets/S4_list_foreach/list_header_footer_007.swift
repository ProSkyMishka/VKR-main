import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf007-header"), footer: Text("hf007-footer")) {
                Text("hf007-i1")
                Text("hf007-i2")
                Text("hf007-i3")
            }
        }
    }
}
