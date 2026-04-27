import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<5, id: \.self) { k in
                Text("fs018-row \(k)")
            }
        }
    }
}
