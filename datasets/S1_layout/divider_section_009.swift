import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("ds009-secA").font(.headline)
            Text("ds009-itemA").font(.body)
            Divider()
            Text("ds009-secB").font(.headline)
            Text("ds009-itemB").font(.body)
            Divider()
            Text("ds009-secC").font(.headline)
            Text("ds009-itemC").font(.body)
        }
        .padding()
    }
}
