import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf018-header"), footer: Text("hf018-footer")) {
                Text("hf018-i1")
                Text("hf018-i2")
                Text("hf018-i3")
            }
        }
    }
}
