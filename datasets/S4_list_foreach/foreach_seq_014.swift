import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<18, id: \.self) { k in
                Text("fs014-row \(k)")
            }
        }
    }
}
