import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            Section(header: Text("hf010-header"), footer: Text("hf010-footer")) {
                Text("hf010-i1")
                Text("hf010-i2")
                Text("hf010-i3")
            }
        }
    }
}
