import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(0..<12, id: \.self) { k in
                Text("fs008-row \(k)")
            }
        }
    }
}
