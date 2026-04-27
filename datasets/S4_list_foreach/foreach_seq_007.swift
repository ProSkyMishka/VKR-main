import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<11, id: \.self) { k in
                Text("fs007-row \(k)")
            }
        }
    }
}
