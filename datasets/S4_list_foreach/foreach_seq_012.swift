import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<16, id: \.self) { k in
                Text("fs012-row \(k)")
            }
        }
    }
}
