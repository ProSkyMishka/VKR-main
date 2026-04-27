import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf015-header"), footer: Text("hf015-footer")) {
                Text("hf015-i1")
                Text("hf015-i2")
                Text("hf015-i3")
            }
        }
    }
}
